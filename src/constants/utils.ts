export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Idle = 'Idle',
  Pending = 'Pending Setup',
  PendingSetup = 'pending-setup'
}

export enum StatusAlarm {
  New = 'New',
  Acknowledged = 'Acknowledged',
  Resolved = 'Resolved'
}
export enum Severity {
  'System Alarm' = 'System Alarm',
  'Battery Alarm' = 'Battery Alarm',
  Fault = 'Fault'
}

interface IStatus {
  [key: string]: string | undefined;
}

interface ISeverity {
  [key: string]: string | undefined;
}
interface IStatusAlarm {
  [key: string]: string | undefined;
}

export const convertStatusUser = (status?: string) => {
  return status ? 'Active' : 'Inactive';
};
const StatusOb: IStatus = {
  active: 'Active',
  inactive: 'Inactive',
  idle: 'Idle',
  pending: 'Pending Setup'
};

const SeverityOb: ISeverity = {
  'system-alarm': 'System Alarm',
  'battery-alarm': 'Battery Alarm',
  fault: 'Fault'
};

const StatusAlarmOb: IStatusAlarm = {
  new: 'New',
  acknowledged: 'Acknowledged',
  resolved: 'Resolved'
};

export const tagColorStatus = (status: string) => {
  switch (status) {
    case Status.Active.toLowerCase():
      return { background: 'rgba(80, 200, 120, 0.1)', color: '#50C878' };
    case Status.Inactive.toLowerCase():
      return { background: 'rgba(204, 204, 204, 0.20)', color: '#8E8E93' };
    case Status.Idle.toLowerCase():
      return { background: 'rgba(94, 105, 132, 0.10)', color: '#5E6984' };
    case Status.PendingSetup.toLowerCase():
      return { background: 'rgba(255, 163, 0, 0.10)', color: '#FFA300' };
    default:
      return { background: 'rgba(204, 204, 204, 0.2)', color: '#8E8E93' };
  }
};

export const tagColorSeverity = (status: string) => {
  switch (status) {
    case Severity['System Alarm'].toLowerCase().replace(' ', '-'):
      return {
        background: 'rgba(255, 163, 0, 0.1)',
        color: '#FFA300',
        fontWeight: 500
      };
    case Severity['Battery Alarm'].toLowerCase().replace(' ', '-'):
      return {
        background: 'rgba(255, 153, 102, 0.1)',
        color: '#FF9966',
        fontWeight: 500
      };
    case Severity.Fault.toLowerCase():
      return {
        background: ' rgba(255, 59, 48, 0.1)',
        color: '#FF3B30',
        fontWeight: 500
      };
    default:
      return {
        background: 'rgba(175, 82, 222, 0.1)',
        color: '#AF52DE',
        fontWeight: 500
      };
  }
};

export const tagColorStatusAlarm = (status: string) => {
  switch (status) {
    case StatusAlarm.New.toLowerCase():
      return {
        background: 'rgba(80, 200, 120, 0.1)',
        color: '#50C878'
      };
    case StatusAlarm.Resolved.toLowerCase():
      return { background: 'rgba(204, 204, 204, 0.2)', color: '#8E8E93' };
    case StatusAlarm.Acknowledged.toLowerCase():
      return { background: 'rgba(43, 122, 232, 0.1)', color: '#2B7AE8' };
    default:
      return { background: 'rgba(43, 122, 232, 0.1)', color: '#2B7AE8' };
  }
};

export const getStatus = (status?: string) => {
  if (status === 'pending-setup') status = 'pending';
  if (status) return StatusOb[status.toLowerCase()];
};

export const getSeverity = (severity?: string) => {
  if (severity) return SeverityOb[severity.toLowerCase()];
};

export const getStatusAlarm = (status?: string) => {
  if (status) return StatusAlarmOb[status.toLowerCase()];
};

export const capitalizedStr = (str?: string) => {
  return str && str.charAt(0).toUpperCase() + str.slice(1);
};



export const timeout = (ms: number): {promise: Promise<string>, cancel(): void} => {
  let timeout: ReturnType<typeof setTimeout>;
  const promiseTimeout: Promise<string> = new Promise(function(resolve) {
    timeout = setTimeout(function() {
      resolve('timeout done');
    }, ms);
  }); 

  return ({
           promise: promiseTimeout, 
           cancel: function(){clearTimeout(timeout);} //return a canceller as well
         });
}


