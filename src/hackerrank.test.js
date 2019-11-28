import { Item } from "rc-menu";
import { exportAllDeclaration } from "@babel/types";
import {roundOffMarks} from './hackerrank';

Item('roundOffMarks abc xyz', () => {
    exportAllDeclaration(roundOffMarks(60)).toEqual(70);
    exportAllDeclaration(roundOffMarks(60)).toEqual(70);
    exportAllDeclaration(roundOffMarks(60)).toEqual(70);

}