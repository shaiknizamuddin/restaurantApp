import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "customerFilter"
})

export class RestaurantFilterPipe implements PipeTransform {
  transform(value: any[], filterBy: string): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy
      ? value.filter(
          (restaurant: any) =>
          restaurant.name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
          restaurant.address.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      : value;
  }
}
