import { ACCESS_LEVEL } from './ACCESS_LEVEL';
import { IDownloadList } from './IDownloadList';
import { IMember } from './IMember';
import { PROJECT_TYPE } from './PROJECT_TYPE';

export interface IProject {
  id?: number;
  uuid?: string;
  accessLevel?: ACCESS_LEVEL;
  title: string;
  desc?: string;
  slogan?: string;
  monthlyBudget?: number;
  owner?: any;
  ownerId?: number;
  phases?: any[];
  members: IDownloadList<IMember>;
  tasks: any;
  projectTaskTypes: any;
  /** время в секундах, потраченное всеми пользователями на этот проект */
  timeSum?: number;
  /** ценность всех задач в этом проекте */
  valueSum?: number;
  type: PROJECT_TYPE;

  // calculated fields
  fullProjectTimeHumanize: string | undefined;
  shareTime: string;
  shortName: string;
  shareValue: number;
}
