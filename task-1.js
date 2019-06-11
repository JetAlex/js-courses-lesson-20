/*
### Задача 1

Создайте класс `Customers` который умеет работать с механизмом `for of`.

Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

**Обратите внимание**:

1. Использование генераторов **ЗАПРЕЩЕНО**.
2. Использование посторонних библиотек **ЗАПРЕЩЕНО**
3. У класса `Customers` **ДОЛЖЕН** быть метод `Symbol.iterator`

Пример использования:

```javascript
const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
{ name: 'Andrii', verified: true }
{ name: 'Marco', verified: true }
{ name: 'Lisa', verified: true }
{ name: 'Ivan', verified: true }
```

 */

class Customers {
  constructor() {
    this.allCustomers = [];
    this.verifiedCutomers = [];
  }

  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        const done = index >= this.verifiedCutomers.length;
        const value = !done ? this.verifiedCutomers[ index++ ] : undefined;

        return {
          value,
          done,
        };
      }
    }
  }


  add(obj) {
    this.allCustomers.push(obj);
    if (obj.verified) {
      this.verifiedCutomers.push(obj);
    }
  }
}

const customers = new Customers();

customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
  console.log(customer);
}

/*
{ name: 'Andrii', verified: true }
{ name: 'Marco', verified: true }
{ name: 'Lisa', verified: true }
{ name: 'Ivan', verified: true }
 */
