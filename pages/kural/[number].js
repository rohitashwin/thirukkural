import { useRouter } from "next/router";
import Router from "next/router";
import ChapterTitle from "../components/ChapterTitle";
import KuralDefinition from "../components/KuralDefinition";

export default function Kural() {
	const router = useRouter();
	const { number } = router.query;
	let kuralNumber = parseInt(number);
	if (kuralNumber < 1 || kuralNumber > 1330) {
		Router.push("/404");
	}
	if (!router.isReady) return <></>;
	return (
		<>
			<ChapterTitle kuralNumber={kuralNumber} />
			<KuralDefinition kuralNumber={kuralNumber} />
		</>
	);
}