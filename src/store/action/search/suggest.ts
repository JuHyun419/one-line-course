// import { ELecturePlatform } from "~typings/type";

// export const suggest = (
//   cachedKeywords: Array<string>,
//   allKeywords: Array<string>,
//   input: string | Array<string>,
//   platform: ELecturePlatform
// ): void | Error => {
//   if (input === "") return;

//   let isKorean: boolean = false;
//   const koreanCheckReg = /[가-힣]/;
//   if (typeof input !== "string") {
//     isKorean = input.join("").match(koreanCheckReg) !== undefined;
//   } else {
//     isKorean = input.match(koreanCheckReg) !== undefined;
//   }

//   // check the input is korean

//   switch (platform) {
//     case ELecturePlatform.Youtube:
//       // TODO: Query in the range of youtube lectures
//       break;

//     case ELecturePlatform.Inflearn:
//       // TODO: Query in the range of inflearn lectures
//       break;

//     default:
//       throw new Error("Can't reach at here!");
//   }
// };
