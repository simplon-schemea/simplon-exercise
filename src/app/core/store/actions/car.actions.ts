import { Action, createAction } from '@ngrx/store';
import { Car } from '@core/models/car';

export enum ActionTypes {
  LoadCars = '[Cars] Get cars from API',
  LoadCarsSuccess = '[Cars] Get cars from API Success',
  LoadCarsFailed = '[Cars] Get cars from API Failed',
  LoadCar = '[Cars] Get car from API',
  LoadCarSuccess = '[Cars] Get car from API Success',
  LoadCarFailed = '[Cars] Get car from API Failed',
  DeleteCar = '[Cars] Delete a car from API',
  DeleteCarSuccess = '[Cars] Delete a car from API Success',
  DeleteCarFailed = '[Cars] Delete a car from API Failed',
  UpdateCar = '[Cars] Update a car from API',
  UpdateCarSuccess = '[Cars] Update a car from API Success',
  UpdateCarFailed = '[Cars] Update a car from API Failed',
  CreateCar = '[Cars] Create a car from API',
  CreateCarSuccess = '[Cars] Create a car from API Success',
  CreateCarFailed = '[Cars] Create a car from API Failed'
}

export class LoadCars implements Action {
  readonly type = ActionTypes.LoadCars;
}

export class LoadCarsSuccess implements Action {
  readonly type = ActionTypes.LoadCarsSuccess;

  constructor(public cars: Car[]) { }
}

export class LoadCarsFailed implements Action {
  readonly type = ActionTypes.LoadCarsFailed;

  constructor(public error: any) { }
}
export class LoadCar implements Action {
  readonly type = ActionTypes.LoadCar;
  constructor(public id: number) { }
}

export class LoadCarSuccess implements Action {
  readonly type = ActionTypes.LoadCarSuccess;

  constructor(public selectedCar: Car) { }
}

export class LoadCarFailed implements Action {
  readonly type = ActionTypes.LoadCarFailed;

  constructor(public error: any) { }
}

export type Actions =
  | LoadCars
  | LoadCarsSuccess
  | LoadCarsFailed
  | LoadCar
  | LoadCarSuccess
  | LoadCarFailed
  | DeleteCar
  | UpdateCar
  | CreateCar
  | DeleteCarSuccess
  | UpdateCarSuccess
  | CreateCarSuccess
  | DeleteCarFailed
  | UpdateCarFailed
  | CreateCarFailed;

export class DeleteCar implements Action {
  readonly type = ActionTypes.DeleteCar;
  id: number;
  constructor(id: number | Car) {
    if (typeof id === 'number') {
      this.id = id;
    } else {
      this.id = id.id;
    }
  }
}

export class DeleteCarFailed implements Action {
  readonly type = ActionTypes.DeleteCarFailed;
  error: string;
  constructor(error: string) {
    this.error = error;
  }
}

export class DeleteCarSuccess implements Action {
  readonly type = ActionTypes.DeleteCarSuccess;
  constructor(public id: number) { }
}

export class UpdateCar implements Action {
  readonly type = ActionTypes.UpdateCar;
  constructor(public car: Car) { }
}

export class UpdateCarSuccess implements Action {
  readonly type = ActionTypes.UpdateCarSuccess;
  constructor(public car: Car) { }
}

export class UpdateCarFailed implements Action {
  readonly type = ActionTypes.UpdateCarFailed;
  constructor(public error: string) { }
}

export class CreateCar implements Action {
  readonly type = ActionTypes.CreateCar;
  constructor(public car: Car) { }
}

export class CreateCarSuccess implements Action {
  readonly type = ActionTypes.CreateCarSuccess;
  constructor(public car: Car) { }
}

export class CreateCarFailed implements Action {
  readonly type = ActionTypes.CreateCarFailed;
  constructor(public error: string) { }
}
