import { AggregateID, EntityBase } from "../../../app/ddd/entity.base";
import { AggregateRoot } from "../../../app/ddd/aggregate-root.base";

export interface AnnualLeaveForUserProps {
    id: number;
    startDate: Date;
    endDate: Date;
    status: string;
    message: string;
}

export interface CreateAnnualLeaveProps {
    baseProps: EntityBase;
    id: number;
    startDate: Date;
    endDate: Date;
    status: string;
    message: string;
}

export const annualLeaveColumns = [
    {
        field: "startDate",
        headerName: "İzin Başlama Tarihi",
        width: 200,
    },
    {
        field: "",
        headerName: "Gün Sayısı",
        width: 100,
    },
    {
        field: "status",
        headerName: "Durumu",
        width: 200,
    },
    {
        field: "startDate",
        headerName: "İzin Başlama Tarihi",
        width: 200,
    },
    {
        field: "endDate",
        headerName: "İzin Bitiş Tarihi",
        width: 200,
    },
];

export class AnnualLeaveEntity extends AggregateRoot<AnnualLeaveForUserProps> {
    protected readonly _id: AggregateID;

    static create(create: CreateAnnualLeaveProps): AnnualLeaveEntity {
        const props: AnnualLeaveForUserProps = { ...create };

        return new AnnualLeaveEntity({ props });
    }
}
