import coinLogo from "assets/icons/coin-logo.svg";
import { atom, useRecoilState } from "recoil";

const defaultState = {
  iconHover: false,
  logoUrl: "",
  image: coinLogo,
  isLoading: false,
  hasError: false,
};

const jettonLogoState = atom({
  key: "jettonLogo",
  default: defaultState,
});

export const useJettonLogo = () => {
  const [jettonLogo, setJettonLogo] = useRecoilState(jettonLogoState);

  const resetJetton = () => setJettonLogo(defaultState);

  const setLogoUrl = (val: string) =>
    setJettonLogo((prev) => {
      return {
        ...prev,
        logoUrl: val,
      };
    });

  const setIconHover = (val: boolean) =>
    setJettonLogo((prev) => {
      return {
        ...prev,
        iconHover: val,
      };
    });

  return { jettonLogo, setLogoUrl, setIconHover, resetJetton };
};
