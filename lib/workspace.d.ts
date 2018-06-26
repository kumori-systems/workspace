import { Component } from './component';
import { Deployment } from './deployment';
import { Service } from './service';
import { Resource } from './resource';
import { LocalStamp } from './localstamp';
import { Project } from './project';
import { Runtime } from './runtime';
import { Stamp } from './stamp';
import { StampStatus } from './utils';
export declare class Workspace {
    component: Component;
    deployment: Deployment;
    localStamp: LocalStamp;
    runtime: Runtime;
    service: Service;
    stamp: Stamp;
    resource: Resource;
    project: Project;
    constructor(component: Component, deployment: Deployment, localStamp: LocalStamp, runtime: Runtime, service: Service, resource: Resource, project: Project, stamp: Stamp);
    bundle(paths: string[]): Promise<any>;
    deploy(paths: string[], stamp: string): Promise<any>;
    deployWithDependencies(name: string, stamp: string, addRandomInbounds: boolean, buildComponents: boolean, forceBuildComponents: boolean): Promise<any>;
    info(requestedInfo: string, stamp: string): Promise<any>;
    init(template: string, configFileName?: string): Promise<boolean>;
    register(paths: string[], stamp: string): Promise<any>;
    undeploy(uris: string[], stamp: string): Promise<any>;
    readConfigFile(): any;
    checkStamp(stamp: string, exitOnFail?: boolean): Promise<StampStatus>;
    getStampStatus(path: string): Promise<StampStatus>;
    startupCheck(): any;
    getStampUrl(stamp: string): string;
}
