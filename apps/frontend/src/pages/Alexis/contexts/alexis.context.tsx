import { createContext, useContext, useState } from "react";
import type { Discount, Product, Report } from "../models/db_models";

interface AlexisContextType {
  productsList: Product[];
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
  reportsList: Report[];
  setReportsList: React.Dispatch<React.SetStateAction<Report[]>>;
  discountList: Discount[];
  setDiscountList: React.Dispatch<React.SetStateAction<Discount[]>>;
}

const AlexisContext = createContext<AlexisContextType | undefined>(undefined);

export const AlexisProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [reportsList, setReportsList] = useState<Report[]>([])
  const [discountList, setDiscountList] = useState<Discount[]>([]);

  return (
    <AlexisContext.Provider value={{ productsList, setProductsList, reportsList, setReportsList, discountList, setDiscountList }}>
      {children}
    </AlexisContext.Provider>
  );
};

export const useAlexisContext = () => {
  const context = useContext(AlexisContext);
  if (!context) {
    throw new Error("useAlexisContext must be used within a AlexisProvider");
  }
  return context;
};
