import Link from "next/link";
import * as Style from "./style";

export default function Button({ icon, nome, link }) {
  return (
    <Link href={link}>
      <a>
        <Style.Botao>
          {icon}
          <span>{nome}</span>
        </Style.Botao>
      </a>
    </Link>
  );
}
