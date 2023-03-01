import ChapterTitle from "./components/ChapterTitle";

export default function Test() {
	let testTitles = [0,1,9,10,11,1330,1331,390,389,391];
	return (
		<>
			{testTitles.map((title, index) => {
				return (
					<ChapterTitle key={index} kuralNumber={title} />
				);
			}
			)}
		</>
	);
}