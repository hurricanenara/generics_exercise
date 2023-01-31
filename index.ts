/*
  1. myDiverseArray와 anotherDiverseArray에 적용할 수 있는 제네릭 타입 MyDiverseArray를 만드세요.
  힌트: 타입도 변수처럼 type alias로 선언 가능.
*/

type MyDiverseArray<T> = T[];

const myDiverseArray: MyDiverseArray<Boolean | number> = [
  true,
  100,
  101,
  102,
  false,
];
const anotherDiverseArray: MyDiverseArray<
  typeof myDiverseArray | string | { [key: string]: string }
> = [myDiverseArray, 'backend developer', { name: 'hermione' }];

/*
  2. stringOnlyArray와 mixedArray에 적용할 수 있는 제네릭 타입 WithDefaultType을 만들되
  stringOnlyArray에는 타입 인자를 전달하지 않아도 컴파일이 되도록 하세요.
*/

type WithDefaultType<T = string> = T[];

const stringOnlyArray: WithDefaultType = [
  "we're",
  'all',
  'gonna',
  'make',
  'it',
];
const mixedArray: WithDefaultType<number | string> = [
  2023,
  'year of the rabbit',
];

/*
  3. createTupleTriplet이라는 함수가 있습니다.
  이 함수는 세개의 인자를 전달받을 수 있고, 전달받은 인자를 순서대로 배열/튜플에 담아 반환을 합니다.
  제네릭을 써서 함수를 완성하세요. (타입 변수, 인자 타입, 반환 타입)
*/

/* describe("#createTupleTriplet", () => {
  it("returns the correct values", () => {
    expect(createTupleTriplet(1001, "hello there", true)).toEqual([
      1001,
      "hello there",
      true,
    ]);
  });
}); */

export function createTupleTriplet<T, M, N>(
  firstValue: T,
  secondValue: M,
  thirdValue: N
): [T, M, N] {
  return [firstValue, secondValue, thirdValue];
}

/*
  4. strictCreateTupleTriplet이라는 함수가 있습니다.
  이 함수는 세개의 인자를 전달받을 수 있고, 전달받은 인자를 순서대로 배열/튜플에 담아 반환을 합니다.
  제네릭을 써서 함수를 완성하세요. (타입 변수, 인자 타입, 반환 타입)
*/

/* describe("#strictCreateTupleTriplet", () => {
  it("returns the correct values", () => {
    expect(strictCreateTupleTriplet(1001, true, [1001])).toEqual([
      1001,
      true,
      [1001],
    ]);
  });
}); */

export function strictCreateTupleTriplet<T, M, N extends T>(
  firstValue: T,
  secondValue: M,
  thirdValue: N[]
): [T, M, N[]] {
  return [firstValue, secondValue, thirdValue];
}

/*
  완성된 함수는 다음과같이 호출이 됐을 때 컴파일이 되거나 에러가 떠야됩니다.
*/

// 컴파일
strictCreateTupleTriplet('123', true, ['123']); // ✅
strictCreateTupleTriplet(2023, false, [2023]); // ✅

// 에러 (진도를나갈 수 있도록 확인 후 주석처리하세요)
strictCreateTupleTriplet(2023, false, [123]); // ❌ ([123] 부분 에러)
strictCreateTupleTriplet('2023', false, ['i am a string']); // ❌ (["i am a string"] 부분 에러)

/*
  5. getRoleOptions와 getCuisineOptions라는 함수가 있습니다.
  주어진 enum과 Option<T> 타입을 활용하여 함수를 완성하고 테스트를 pass 하세요.
*/

/* { label: "Admin", value: "ROLE_ADMIN" },
{ label: "Customer", value: "ROLE_CUSTOMER" },
{ label: "Seller", value: "ROLE_SELLER" },
{ label: "Korean food", value: "CUISINE_KOREAN" },
{ label: "Italian food", value: "CUISINE_ITALIAN" },
{ label: "Thai food", value: "CUISINE_THAI" }, */

enum Role {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_CUSTOMER = 'ROLE_CUSTOMER',
  ROLE_SELLER = 'ROLE_SELLER',
}

enum Cuisine {
  CUISINE_KOREAN = 'CUISINE_KOREAN',
  CUISINE_ITALIAN = 'CUISINE_ITALIAN',
  CUISINE_THAI = 'CUISINE_THAI',
}

interface Option<T> {
  label: string;
  value: T;
}

export function getRoleOptions(): Option<Role>[] {
  return Object.values(Role).map((value) => {
    return {
      label: value
        .split('_')[1]
        .toLowerCase()
        .replace(/^[a-z]/, (char) => char.toUpperCase()),
      value: value,
    };
  });
}

export function getCuisineOptions(): Option<Cuisine>[] {
  return Object.values(Cuisine).map((value) => {
    return {
      label:
        value
          .split('_')[1]
          .toLowerCase()
          .replace(/^[a-z]/, (char) => char.toUpperCase()) + ' food',
      value: value,
    };
  });
}

/*
  6-7. Queue라는 class가 있습니다.
  제네릭 인터페이스 IQueue를 완성하세요 (인자 타입, 반환 타입).
  완성 된 인터페이스를 Queue class에 반영하세요.
  Queue class는 여러 데이터 구조를 전달받을 수 있는 제네릭 class입니다.
  힌트: 강의자료 Stack 참조하세요.
*/

interface IQueue<I> {
  enqueue(x: I): void;
  dequeue(): I | undefined;
  size(): number;
}

export class Queue<I> implements IQueue<I> {
  protected data: Array<I> = [];

  enqueue(x: I): void {
    this.data.push(x);
  }
  dequeue(): I | undefined {
    return this.data.shift();
  }
  size(): number {
    return this.data.length;
  }
}

/*
  8. IRepository라는 인터페이스가 있습니다.
  다음 네가지 메소드가 있다고 가정했을 때 각 메소드의 타입을 정의해주세요. (인자 타입, 반환 타입)
  IRepository는 제네릭 인터페이스입니다.
*/

interface IRepository<I> {
  create(x: I): void;
  findById(): I | undefined;
  updateById(): I | undefined;
  deleteById(): I | undefined;
}

/*
  9. getLength라는 함수가 있습니다.
  제네릭을 사용하여 매개변수의 길이를 반환하도록하세요.
  길이를 알 수 없는 매개변수는 에러가납니다.
*/

/* 
expect(getLength("123")).toEqual(3);
expect(getLength([])).toEqual(0); 
*/

export function getLength<T extends number[] | string>(input: T): number {
  return input.length;
}

// getLength(123); // ❌
getLength([123]); // ✅
getLength('12345'); // ✅

/*
  10. EnumRecord 라는 타입이 있습니다.
  제네릭을 사용하여 myFirstRecord 그리고 mySecondRecord와 같은 객체를 충족하는 타입을 완성하세요.
*/

type EnumRecord<T extends Role | Cuisine> = {
  [key in T]: string[];
};

const myFirstRecord: EnumRecord<Cuisine> = {
  CUISINE_ITALIAN: ['pasta', 'burrata'],
  CUISINE_KOREAN: ['bibimbap', 'kimchi'],
  CUISINE_THAI: ['tom yum soup', 'pad thai'],
};

const mySecondRecord: EnumRecord<Role> = {
  ROLE_ADMIN: ['payroll'],
  ROLE_CUSTOMER: ['orders'],
  ROLE_SELLER: ['products', 'revenue'],
};
