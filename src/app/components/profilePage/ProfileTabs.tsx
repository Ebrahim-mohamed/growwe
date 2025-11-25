import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrdersTable from "./OrdersTable";
import ShippingTable from "./ShippingData";

export function ProfileTabs() {
  return (
    <div className="flex w-full flex-col gap-6 items-center justify-center p-[var(--section-Padding)] pt-0">
      <Tabs
        defaultValue="orders"
        className="text-[1.5rem] w-full flex items-center justify-center"
      >
        <TabsList className="w-[50%] h-full ">
          <TabsTrigger
            value="orders"
            className="text-[1.5rem] min-w-[20rem] cursor-pointer"
          >
            Your orders
          </TabsTrigger>
          <TabsTrigger
            value="shipping"
            className="text-[1.5rem] min-w-[20rem] cursor-pointer"
          >
            Your shipping data
          </TabsTrigger>
        </TabsList>
        <TabsContent value="shipping" className="p-[1.5rem] w-full">
          <ShippingTable />
        </TabsContent>
        <TabsContent value="orders" className="p-[1.5rem] w-full">
          <OrdersTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
