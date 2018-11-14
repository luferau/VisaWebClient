import { HardwareInterfaceType } from './HardwareInterfaceType';

export class VisaResource {
    alias: string;
    expandedUnaliasedName: string;
    interfaceNumber: number;
    interfaceType: HardwareInterfaceType;
    originalResourceName: string;
    resourceClass: string;
    opened: boolean;
}
