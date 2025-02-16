export default function SpecializedSection() {
    const fillOutItems = ["Shopping Malls", "Commercial Buildings", "Restaurants", "Retail Shops"]
    const maintenanceItems = [
        "Residential Building",
        "Commercial Buildings",
        "Warehouse",
        "Factories",
        "Hospitals",
        "Storage Areas",
        "Restaurants",
        "Shopping Malls",
        "Marine",
        "Retails Shops",
        "School",
        "Retails Shops",
        "Offices",
    ]
    const projectItems = ["Warehouse", "Residential", "Commercial", "Retail Shops"]

    const renderItem = (item, index, isMiddleColumn = false) => {
        const isOdd = index % 2 === 0;
        const shadowClass = isOdd ? "shadow-[0_2px_10px_rgba(0,0,0,0.08)]" : "";
        const itemClass = `flex items-center bg-white rounded-md py-3 px-5 ${shadowClass}`;
        const itemClass2 = `flex items-center bg-white rounded-md py-3 px-5 ${!isMiddleColumn && isOdd ? "shadow-[0_2px_10px_rgba(0,0,0,0.08)]" : ""}`


        return (
            <div key={item} className={itemClass && itemClass2}>
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#40BFFD] mr-4" />
                <span className="text-sm xl:text-md">{item}</span>
            </div>


        );

        


    };


    return (
        <section className="w-full py-16 bg-[#d1d0d0] lg:px-5 xl:px-20 bg-cover bg-center"
        style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/48ba/ddd2/6192a45a78980c7968e0055690dcbb56?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hDySyxajy8z2GEspEx9N42OfNKwOA4FxStWT5oj2V3KLqmzZw8Rov4LH5E52ftkpjVJPGwcZfvv9HJJoEp1L2SCap5qjO75ZzDDJbIv4AkDKt8oOd5wAxZfbu2tIFL3RwzNlx8GjBQPLpX3FVjrP8~sWht5ofEtNIbXMrp85D~UDDQEE7JRlcE3uBBt~QUEyx-eqzXb~bhYtQl6wQ7wWMhzaSDgGtRMSET8RCbkqUnrEimS6e8L1TG72cdIncpOdSMiF5~prt7e3K20qfie4al-D~~sw3OkPjQNkR53Zi-SCHKMy4L4YzymPM7lIAjLUJ62Ihs~~DdDJVyGZe3UsWA__')",
          }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <div className="w-15 h-[3px] bg-gradient-to-r from-[#06A9EF] to-[#74D5FF] relative top-3"/>
                    We are <span className="text-[#40BFFD]">specialized</span> at
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8">
                    {/* Fill Out Column */}
                    <div className="bg-white rounded-md p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-fit">
                        <h3 className="text-xl font-semibold mb-6 text-center">Fill Out</h3>
                        <div className="space-y-3">{fillOutItems.map((item, index) => renderItem(item, index))}</div>
                    </div>

                    {/* Maintenance Column */}
                    <div className="bg-white rounded-md p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-fit">
                        <h3 className="text-xl font-semibold mb-6 text-center">Maintenance</h3>
                        <div className="grid grid-cols-2 gap-x-3">
                            {maintenanceItems.map((item, index) =>
                                index % 2 === 0 ? (
                                    <div key={index} className="col-span-2 mb-3">
                                        <div
                                            className={`grid grid-cols-2 gap-x-3 ${index % 4 === 0 ? "shadow-[0_2px_10px_rgba(0,0,0,0.08)]" : ""} rounded-md`}
                                        >
                                            {renderItem(maintenanceItems[index], index, true)}
                                            {maintenanceItems[index + 1] && renderItem(maintenanceItems[index + 1], index + 1, true)}
                                        </div>
                                    </div>
                                ) : null,
                            )}
                        </div>
                    </div>

                    {/* Projects Column */}
                    <div className="bg-white rounded-md p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-fit">
                        <h3 className="text-xl font-semibold mb-6 text-center">Projects</h3>
                        <div className="space-y-3">{projectItems.map((item, index) => renderItem(item, index))}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

