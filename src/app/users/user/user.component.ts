import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string } = {
    id: 0,
    name: ''
  };

  private routeSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.routeSubscription = Subscription.EMPTY;
  }

  ngOnInit() {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    }

    this.routeSubscription = this.activatedRoute.params.subscribe(
      (updatedParams: Params) => {
        this.user = {
          id: updatedParams['id'],
          name: updatedParams['name']
        }
      }
    )
  }

  ngOnDestroy(): void {
      this.routeSubscription.unsubscribe();
  }

}
