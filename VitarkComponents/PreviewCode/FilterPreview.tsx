"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Filter } from "lucide-react";
import { SetStateAction, useState } from "react";

import { Button } from "@/components/ui/button";

const filterDummyData = [
  {
    Id: "E001",
    subject: "Invoice INV001 Payment Confirmation",
    from: "billing@company.com",
    content:
      "Dear Customer,\n\nThank you for your payment of $250.00 for Invoice INV001. Your transaction has been successfully processed.\n\nBest regards,\nCompany Billing Team",
    status: "read",
  },
  {
    Id: "E002",
    subject: "Reminder: Invoice INV002 Due Soon",
    from: "reminders@company.com",
    content:
      "Hello,\n\nThis is a friendly reminder that Invoice INV002 for $150.00 is due soon. Please make your payment to avoid any late fees.\n\nThank you!",
    status: "unread",
  },
  {
    Id: "E003",
    subject: "Invoice INV003 Unpaid Notification",
    from: "billing@company.com",
    content:
      "Dear Customer,\n\nWe noticed that Invoice INV003 remains unpaid. The total amount due is $350.00. Please take action at your earliest convenience.\n\nRegards,\nCustomer Support",
    status: "unread",
  },
  {
    Id: "E004",
    subject: "Invoice INV004 Payment Confirmation",
    from: "billing@company.com",
    content:
      "Dear Customer,\n\nYour payment of $450.00 for Invoice INV004 has been received successfully. Thank you for your prompt payment!\n\nSincerely,\nBilling Department",
    status: "read",
  },
  {
    Id: "E005",
    subject: "Invoice INV005 Payment Received",
    from: "notifications@company.com",
    content:
      "Hi,\n\nWe have successfully processed your payment of $550.00 for Invoice INV005. Thank you!\n\nBest,\nNotifications Team",
    status: "read",
  },
  {
    Id: "E006",
    subject: "Action Required: Invoice INV006 Pending Payment",
    from: "alerts@company.com",
    content:
      "Hello,\n\nYour Invoice INV006 totaling $200.00 is currently pending payment. Please ensure that it is settled promptly to avoid service interruptions.\n\nThank you!",
    status: "unread",
  },
  {
    Id: "E007",
    subject: "Invoice INV007 Unpaid Alert",
    from: "notifications@company.com",
    content:
      "Dear Customer,\n\nThis is a notice regarding Invoice INV007, which remains unpaid with a total amount of $300.00. We urge you to make the payment as soon as possible.\n\nRegards,\nCollections Team",
    status: "deleted",
  },
];

const filterBy = "status";

const filterValuesDummyData = ["deleted", "unread", "read"];

function FilterPreview() {
  const [FilterData, setFilterData] = useState(filterDummyData);
  const [filterValues] = useState(filterValuesDummyData);
  const [selectedOption, setSelectedOption] = useState("");

  function handleFilterData(filterOption: SetStateAction<string>) {
    setSelectedOption(filterOption);

    console.log(typeof filterOption);

    if (filterOption === "") {
      return setFilterData(filterDummyData);
    }

    console.log(typeof filterOption);

    const filteredData = filterDummyData.filter(
      (data) => data[filterBy] === filterOption
    );
    setFilterData(filteredData);
  }

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-center justify-center h-auto p-1 md:p-2 lg:p-12 pt-8 md:pt-6 lg:pt-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <span>Filter data</span>
            <Filter />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by {filterBy}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {filterValues?.map((filterOption, i) => {
            return (
              <DropdownMenuCheckboxItem
                key={"filterOption" + i}
                checked={selectedOption === filterOption}
                onCheckedChange={() => handleFilterData(filterOption)}>
                {filterOption === selectedOption ? (
                  <Check size={14} className="mr-2" />
                ) : (
                  <div className="mr-2">&nbsp;</div>
                )}
                {filterOption}
              </DropdownMenuCheckboxItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            className="bg-slate-900 text-slate-50"
            onCheckedChange={() => handleFilterData("")}>
            Clear Filter
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Table className="border border-slate-200 dark:border-slate-700 mt-8">
        <TableHeader className="dark:bg-slate-950 text-xs sm:text-sm">
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>From</TableHead>
            {/* <TableHead>Content</TableHead> */}
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs sm:text-sm">
          {FilterData.map((data) => (
            <TableRow key={data.Id}>
              <TableCell className="font-medium">{data.Id}</TableCell>
              <TableCell>{data.subject}</TableCell>
              <TableCell>{data.from}</TableCell>
              {/* <TableCell className="text-right">{data.content}</TableCell> */}
              <TableCell className="text-right">{data.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default FilterPreview;
