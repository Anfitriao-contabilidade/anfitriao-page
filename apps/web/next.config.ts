import "@anfitriao/env/load-root-env";
import "@anfitriao/env/web";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const monorepoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

// #region agent log
fetch("http://127.0.0.1:7328/ingest/dc314140-c2bf-4e0c-a40e-81bf0721741a", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"X-Debug-Session-Id": "2d79d6",
	},
	body: JSON.stringify({
		sessionId: "2d79d6",
		runId: "pre-fix",
		hypothesisId: "C",
		location: "apps/web/next.config.ts:config-load",
		message: "next.config loaded",
		data: {
			pid: process.pid,
			ppid: process.ppid,
			cwd: process.cwd(),
			argv: process.argv.slice(1),
		},
		timestamp: Date.now(),
	}),
}).catch(() => {});
void (async () => {
	let probe: {
		reachable: boolean;
		status: number;
		title: string;
		error: string;
	} = { reachable: false, status: 0, title: "", error: "" };
	try {
		const res = await fetch("http://127.0.0.1:3000/", {
			signal: AbortSignal.timeout(2500),
		});
		const html = await res.text();
		probe = {
			reachable: true,
			status: res.status,
			title: (html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "").slice(0, 80),
			error: "",
		};
	} catch (error) {
		probe = {
			reachable: false,
			status: 0,
			title: "",
			error: String(error),
		};
	}
	await fetch("http://127.0.0.1:7328/ingest/dc314140-c2bf-4e0c-a40e-81bf0721741a", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Debug-Session-Id": "2d79d6",
		},
		body: JSON.stringify({
			sessionId: "2d79d6",
			runId: "pre-fix",
			hypothesisId: "A",
			location: "apps/web/next.config.ts:port-probe",
			message: "probed existing listener on :3000",
			data: { pid: process.pid, probe },
			timestamp: Date.now(),
		}),
	}).catch(() => {});
})();
// #endregion

const nextConfig: NextConfig = {
	reactCompiler: true,
	turbopack: {
		root: monorepoRoot,
	},
	outputFileTracingRoot: monorepoRoot,
};

export default nextConfig;
