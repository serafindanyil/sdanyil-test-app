// import { useEffect, useRef, useState } from "react";
// import { RootState } from "~/store/store.ts";
// import { useDispatch, useSelector } from "react-redux";

// interface useCardTimerProps {
// 	cardId: number;
// }

// export const useCardTimer = ({ cardId }: useCardTimerProps) => {
// 	const mountedTime = useSelector(
// 		(state: RootState) => state.items[cardId]?.time
// 	);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			if (duration <= 0) {
// 				clearInterval(interval);
// 			}
// 		}, 1000);
// 		return () => {
// 			clearInterval(interval);
// 		};
// 	}, []);
// };
