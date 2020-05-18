export class NsDirectionResult {
  routes: NsRoute[];
}

export class NsRoute {
  legs: NsLeg[];
  overview_polyline: NsOverviewpolyline;
}


export class NsOverviewpolyline {
  points: string;
}

export class NsLeg {
  summary: string;
  distance: NsDistance;
  duration: NsDistance;
  steps: NsStep[];
}

export class NsStep {
  name: string;
  instruction: string;
  distance: NsDistance;
  duration: NsDistance;
  polyline: string;
  maneuver: string;
  start_location: number[];
}

export class NsDistance {
  value: number;
  text: string;
}
