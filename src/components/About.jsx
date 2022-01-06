const About = () => {
  return (
    <div className="aboutDiv text-center text-white pt-8 flex justify-center px-8">
      <div>
        <h2 className="text-2xl font-bold mb-5">Ower's ShowRoom</h2>

        <p className="mt-4">
          Ez a kis lap arra szolgál, hogy a GTA Online (kb az egyetlen játék, amivel
          játszom) évei alatt összegyűtjött járműveim átláthatóvá / megmutathatóvá
          tegye.{" "}
        </p>
        <p className="mt-4">
          Került bele még egy random funckió is Lehet, más is így van ezzel, de 50+
          kocsi felett én már el-el feledkezem egy-egy autóról, ami csak porosodik a
          garázsban, pedig mikor megvettem / megnyertem mekkorákat mókáztunk vele. A
          (a későbbiekben funckiókkal bőviteni szándékolt) random funkció meg dob egy
          járművet, és a következő melót vagy funt azzal tesszük meg. `
        </p>
        <p className="mt-4">
          <div className="font-bold text-red-800 text-xl mt-6">FIGYELEM!</div>
          <span>A project </span>
          <span className="font-bold">fejlesztés alatt áll</span>, funckiói tesztelés
          alatt vannak, és a végső változat stílusosabb külsővel (és valószínűleg jó
          néhány plusz funkcióval) fog bővülni.
          <div>
            Tervben vannak plusz képek (autónként több), kategóriák bevezetése, több
            kényelmi funckió egyelőre ennyire volt idő:D Jelenlegi formája egy
            bemutatóoldalra feltölthető változat.
          </div>
        </p>
        <p className="mt-6">
          <div className="italic">
            , a projekt, a rajta lévő képek és (és később írások) a saját
            kreaálmányok projekttől független terjesztésével kapcsolatban keress meg
            az e felület bemutatására szolgáló felületen
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
