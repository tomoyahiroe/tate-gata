export class ID {
  /**
   * 一般的なIDの値オブジェクト
   *
   * 以下の条件を満たす場合のみ有効な値である
   * - 数値型の文字列である
   * - 0より大きい値である
   * - 整数である
   */

  constructor(readonly value: string) {
    if (!this.isValid(value)) {
      throw new TypeError(this.requirementErrorMessage);
    }
  }

  private isValid(value: string): boolean {
    return (
      ID.isNumeric(value) && ID.isGreaterThanZero(value) && ID.isInteger(value)
    );
  }
  private get requirementErrorMessage(): string {
    return `ID must be a integer that is greater than 0, but value is "${this.value}"`;
  }

  private static isNumeric(value: string): boolean {
    return !isNaN(Number(value));
  }

  private static isGreaterThanZero(value: string): boolean {
    return Number(value) > 0;
  }

  private static isInteger(value: string): boolean {
    return Number.isInteger(Number(value));
  }
}
