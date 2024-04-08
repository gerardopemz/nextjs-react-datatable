import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Datatable() {
  return (
    <Table>
      <TableCaption>List of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Leanne Graham</TableCell>
          <TableCell>Bret</TableCell>
          <TableCell>Sincere@april.bix</TableCell>
          <TableCell>Romaguera-Crona</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Ervin Howell</TableCell>
          <TableCell>Antonette</TableCell>
          <TableCell>Shanna@melissa.tv</TableCell>
          <TableCell>Deckow-Crist</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Clementine Bauch</TableCell>
          <TableCell>Samantha</TableCell>
          <TableCell>Nathan@yesenia.net</TableCell>
          <TableCell>Romaguera-Jacobson</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Patricia Lebsack</TableCell>
          <TableCell>Karianne</TableCell>
          <TableCell>Julianne.OConner@kory.org</TableCell>
          <TableCell>Robel-Corkery</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Chelsey Dietrich</TableCell>
          <TableCell>Kamren</TableCell>
          <TableCell>Lucio_Hettinger@annie.ca</TableCell>
          <TableCell>Keebler LLC</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
