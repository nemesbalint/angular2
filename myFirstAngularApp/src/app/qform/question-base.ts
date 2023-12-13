export class QuestionBase<T> {
[x: string]: any;
    value!: T;
    key!: string;
    label!: string;
    required!: boolean;
    order!: number;
    controlType!: string;

    constructor(options:{
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
        }) {
            /*
            TODO: check usage in Angular17
            for(var k in options) {
                if (k) {
                    this[k.valueOf] = options[k];
                }
            }
            */
            this['value'] = options['value']!;
            this['key'] = options['key']!;
            this['label'] = options['label']!;
            this['order'] = options['order']!;
            this['controlType'] = options['controlType']!;
    };
}
