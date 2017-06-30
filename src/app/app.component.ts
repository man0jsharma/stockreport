import { Component, Injectable } from '@angular/core';

class StockTable {
  constructor(
    public Account: AccountInfo,
    public AvailableCash: number,
    public ChangeInNumber: number,
    public ChangeInPercentage: number
  ) { }


}

class AccountInfo {
  constructor(public Name: String, public Number: Number) {
  }
  FormatAccountInfo() {
    return this.Name + " - " + this.Number;
  }
}

@Injectable()
export class DataService {
  constructor() { }
  getData(): StockTable[] {
    return [
      new StockTable(
        new AccountInfo("IRA", 7895),
        856565,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("REG", 7896),
        856565,
        74523,
        .03
      ),
      new StockTable(
        new AccountInfo("AAA", 7897),
        87452,
        52515,
        -.03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      ),
      new StockTable(
        new AccountInfo("IRA", 7897),
        87452,
        52515,
        .03
      )
    ]
  }

  getSortedData(isAscending, take) {
    var dataArray = this.getData();
    return {
      totalNumber : dataArray.length,
      sortedArray : (dataArray.sort((source, comparand) => {
        if (isAscending)
          return source.Account.Number < comparand.Account.Number ? 1 : -1;
        else
          return source.Account.Number > comparand.Account.Number ? 1 : -1;
        }
        ).splice(0,take))
    }
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent {
  constructor(private dataService: DataService) { }
  title = 'Angular Stock report';
  private take = 3;
  private stocktableObject= this.dataService.getSortedData(true, this.take);
  stocktableList = this.stocktableObject.sortedArray;
  totalNumber = this.stocktableObject.totalNumber;
  isAscending: Boolean = false;
  sortAccount() {
    this.isAscending = !this.isAscending;
    this.stocktableList = this.dataService.getSortedData(this.isAscending, this.take).sortedArray;
  }
  LoadMore(){
    this.take += 3;
    this.stocktableList = this.dataService.getSortedData(this.isAscending, this.take).sortedArray;
  }
}


