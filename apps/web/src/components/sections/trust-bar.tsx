import { CheckIcon } from "@/components/brand/icons";
import { trustItems } from "@/lib/site-config";

export function TrustBar() {
	return (
		<div className="trustbar">
			<div className="wrap">
				{trustItems.map((item) => (
					<div className="trust-item" key={item}>
						<CheckIcon />
						{item}
					</div>
				))}
			</div>
		</div>
	);
}
