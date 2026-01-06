import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const prices = [
  {
    paket: "Basic",
    fitur: "Landing Page, Responsive",
    harga: "Rp 500.000",
  },
  {
    paket: "Standard",
    fitur: "Multi Page, SEO Basic",
    harga: "Rp 1.200.000",
  },
  {
    paket: "Premium",
    fitur: "Custom Design, Admin Panel",
    harga: "Rp 2.500.000",
  },
];

export default function PricingTable() {
  return (
    <>
      <div>
        <h1 className="text-center font-medium indent-8">Daftar Harga</h1>
        <p className="whitespace-pre-line text-center indent-8 mt-auto p-10">
          Kami menyediakan berbagai pilihan paket layanan pembuatan website yang
          dapat disesuaikan dengan kebutuhan Anda. Setiap paket dirancang dengan
          fokus pada performa, tampilan modern, dan pengalaman pengguna yang
          optimal. Pilih paket yang paling sesuai dengan tujuan bisnis atau
          personal Anda.
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Paket</TableHead>
            <TableHead>Fitur</TableHead>
            <TableHead className="text-right">Harga</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prices.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-semibold">{item.paket}</TableCell>
              <TableCell>{item.fitur}</TableCell>
              <TableCell className="text-right">{item.harga}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
