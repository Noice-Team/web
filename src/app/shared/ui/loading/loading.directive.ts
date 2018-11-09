import { Directive, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { LoadingComponent } from './loading.component';

@Directive({
    selector: '[ngIfWithLoading]',
})
export class LoadingDirective {
    @Input() set ngIf(val: any) {
        if (!val) {
            const factory = this.resolver.resolveComponentFactory(LoadingComponent);
            this.vcRef.createComponent(factory);
        }
    };

    constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }
}
