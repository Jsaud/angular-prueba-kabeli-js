export class User {
  'name': string;
  'email': string = '';
  'password': string;
  'phone': {
    number: string;
    citycode: string;
    contrycode: string;
  };
}
