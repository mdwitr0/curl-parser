import { IOutput } from "./interface";
import * as shelwords from "shellwords";

const split = (str: string): string[] => {
  if (!str) return [];
  const argsRegexp =
    /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/g;

  const args = str.match(argsRegexp);
  return args?.map((i) => i.trim().replace(/'/g, "")) || [];
};

export const curlToObject = <D = any>(curlStr: string): IOutput<D> => {
  return {};
};
