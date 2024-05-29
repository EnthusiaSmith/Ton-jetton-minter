import { Chip } from "@mui/material";
import { ROUTES } from "consts";
import { LogoWrapper } from "./styled";
import { useNetwork } from "lib/hooks/useNetwork";
import { useNavigatePreserveQuery } from "lib/hooks/useNavigatePreserveQuery";

export const AppLogo = () => {
  const navigate = useNavigatePreserveQuery();
  const { network } = useNetwork();
  return (
    <LogoWrapper onClick={() => navigate(ROUTES.deployer)}>
      {network === "testnet" && <Chip sx={{ ml: 1 }} label="testnet" />}
    </LogoWrapper>
  );
};
