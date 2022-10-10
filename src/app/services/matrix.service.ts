import { Injectable } from '@angular/core';
import { chartInterface } from '../interfaces/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class MatrixService {
  constructor() {}

  /**
   *  Create an immutable copy of a matrix
   * @param matrix The matrix to copy
   * @return       The clone of the matrix
   */
  copy(matrix: chartInterface[][]) {
    /**
     *  Create an immutable clone of an array
     * @param cloneArr The array to copy
     * @return {Array[]} The new array
     */
    const cloneArray: any = (cloneArr: chartInterface[]) => {
      const newArray = Array.from(
        cloneArr.map(({ ...item }) => {
          return item;
        })
      );

      return newArray;
    };

    /**
     *  Create an immutable clone of a matrix
     * @param cloneMtx     The matrix to copy
     * @return {Array[][]} The new array
     */
    const cloneMatrix: any = (cloneMtx: chartInterface[][]) => {
      const newMatrix = Array.from(
        cloneMtx.map((array: any) => {
          return cloneArray(array);
        })
      );

      return newMatrix;
    };

    //Return new matrix;
    return cloneMatrix(matrix);
  }
}
