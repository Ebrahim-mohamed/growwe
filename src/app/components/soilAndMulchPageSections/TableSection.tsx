import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";

export function TableSection({
  rowsNumber,
  tableNumber,
  type,
}: {
  rowsNumber: number;
  tableNumber: number;
  type: string;
}) {
  const tableTranslation = useTranslations(
    `informationMulchAndSoil.tableSection.${type}Table${tableNumber}`
  );

  const isSoil = type === "soil";

  return (
    <div className="w-full">
      <Table className={`w-full table-fixed border-separate border-spacing-2 `}>
        {/* Column Widths (this is what makes the first column larger) */}
        <colgroup>
          {isSoil ? (
            <>
              <col className="w-[50%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </>
          ) : (
            <>
              <col className="w-[60%]" />
              <col className="w-[40%]" />
            </>
          )}
        </colgroup>

        <TableHeader>
          <TableRow>
            {Array.from({ length: isSoil ? 3 : 2 }).map((_, index) => (
              <TableHead
                key={index}
                className="bg-[#426B1F] rounded-[0.6rem] text-[2rem] font-semibold text-white px-[1rem] py-[0.4rem] m-[0.2rem] text-center"
              >
                {tableTranslation(`headers.head${index + 1}`)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rowsNumber }).map((_, index) => (
            <TableRow
              key={index}
              className={`text-[1.7rem] font-normal ${
                index % 2 === 1 ? "bg-[#F1F3F6]" : "bg-white"
              }`}
            >
              <TableCell className="pl-[4rem]">
                {tableTranslation(`row${index + 1}.cell1`)}
              </TableCell>

              <TableCell className="text-center">
                {tableTranslation(`row${index + 1}.cell2`)}
              </TableCell>

              {isSoil && (
                <TableCell className="text-center">
                  {tableTranslation(`row${index + 1}.cell3`)}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
