import { useEffect, useState } from "react";
import { useAlexisContext } from "../contexts/alexis.context";
import * as reportsService from "../service/reports.service";
import type { Report } from "../models/db_models"

const Reports = () => {
  const { reportsList, setReportsList } = useAlexisContext();

  const [productsReports, setProductsReports] = useState<Report[]>([]);
  const [discountsReports, setDiscountsReports] = useState<Report[]>([]);
  const [dataFont, setDataFont] = useState<Report[]>([]);
  const [section, setSection] = useState<"products" | "discounts">("products");

  const setReports = async () => {
    const allReports: Report[] = await reportsService.getAllReports();
    setReportsList(allReports);

    const prod = allReports.filter((r) => r.on_table === "products");
    const disc = allReports.filter((r) => r.on_table === "discounts");

    setProductsReports(prod);
    setDiscountsReports(disc);

    // Solo establecer dataFont si ya se tiene section correcto
    setDataFont(section === "products" ? prod : disc);
  };

  useEffect(() => {
    if (!reportsList.length) setReports();
  }, [reportsList]);

  // Actualiza dataFont al cambiar de sección o al llegar nuevos reportes filtrados
  useEffect(() => {
    setDataFont(section === "products" ? productsReports : discountsReports);
  }, [section, productsReports, discountsReports]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-sky-100 via-blue-100 to-indigo-50">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6 drop-shadow-lg">
        📝 Registro de Reportes
      </h1>

      <div className="flex justify-center mb-10">
        <select
          value={section}
          onChange={(e) =>
            setSection(e.target.value as "products" | "discounts")
          }
          className="px-4 py-2 rounded-xl bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-700 text-lg transition-all"
        >
          <option value="products">Productos</option>
          <option value="discounts">Descuentos</option>
        </select>
      </div>

      {!dataFont.length ? (
        <p className="text-center text-lg text-gray-600">Cargando reportes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-12">
          {dataFont.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border-t-8 border-sky-400 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-20 h-20 bg-sky-200 rounded-bl-full z-0"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-gray-800">ID Reporte: {report.id}</h2>
                <p className="text-md text-gray-600 mt-2">
                  <strong>Acción:</strong> {report.action_type}
                </p>
                <p className="text-md text-gray-600 mt-2">
                  <strong>Tabla:</strong> {report.on_table}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reports;
