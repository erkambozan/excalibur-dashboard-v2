import { AnnualLeaveForUserProps } from "../entity/AnnualLeave";

export class AnnualLeaveMapper {
  static toViewModelForUser(props: any): AnnualLeaveForUserProps {
    return {
      id: props.id,
      startDate: props.startDate,
      endDate: props.endDate,
      status: props.status,
      message: props.message,
    };
  }

  static toViewModelListForUser(props: any[]): AnnualLeaveForUserProps[] {
    return props.map((item) => {
      return {
        id: item.id,
        startDate: item.startDate,
        endDate: item.endDate,
        status: item.status,
        message: item.message,
      };
    });
  }
}
