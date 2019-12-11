import extenso from "extenso";
import extenso1 from "../lib/numberExtenso";

class ExtensoController {
  async search(req, res) {
    const number = req.params.number;
    const settings = { locale: "br" };
    let menos = "";

    if (number.charAt(0) === "-") {
      menos = "menos ";
      settings.negative = "informal";
    }

    console.log(extenso1(number));

    return res.json({
      extenso: extenso(number, settings),
      extenso2: menos + extenso1(number)
    });
  }
}

export default new ExtensoController();
