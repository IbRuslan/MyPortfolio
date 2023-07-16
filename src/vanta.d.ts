declare module 'vanta/dist/vanta.net.min' {
    import * as THREE from 'three';

    interface VantaBackground {
        destroy: () => void;
        restart: () => void;
        options: any;
    }

    function NET(options: {
        el: string | HTMLElement;
        THREE: typeof THREE;
        mouseControls: boolean,
        touchControls: boolean,
        gyroControls: boolean,
        minHeight: any,
        minWidth: any,
        scale: any,
        scaleMobile: any,
        color: any,
        backgroundColor: any,
    }): VantaBackground;

    export = NET;
}