import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable()
export abstract class UnsubscribeHelper implements OnDestroy {

    public subscriptions: Subscription[] = [];
    public ngOnDestroy(): void {
        console.log("UnsubscribeHelper.ngOnDestroy");
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

}