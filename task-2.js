/*
### Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **ИДЕНТИЧНО** предыдущей задаче.

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

  *[Symbol.iterator]() {
    for (const customer of this.verifiedCutomers) {
      yield customer;
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
