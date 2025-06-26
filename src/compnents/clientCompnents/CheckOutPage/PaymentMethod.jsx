export default function PaymentMethod({ paymentMethod, setPaymentMethod }) {

    const data = [
        { _id: 1, image: "/images/nagad-logo.png", name: "নগদ", textColour: "#F7941D" },
        { _id: 2, image: "/images/bkash-logo.webp", name: "বিকাশ ", textColour: "#E2136E" },
    ]

    return (
        <div className="p-4 border mt-5 rounded mb-5">
            <h1 className="heading mb-3">পেমেন্ট অপশন</h1>
            <div className="grid grid-cols-2 gap-3">
                {data?.map(item => (
                    <div
                    onClick={()=> setPaymentMethod(item?.name)}
                        style={{
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: item.textColour
                        }}

                        key={item?._id}
                        className="h-20 relative items-center flex gap-3 p-1 cursor-pointer rounded">

                        {/* show which one selected */}
                        {item.name === paymentMethod &&
                            <div className="absolute w-5 h-5 p-1 right-2 top-2 rounded-full border border-orange-500">
                                <div style={{ background: item?.textColour }} className="w-full h-full rounded-full"></div>
                            </div>
                        }

                        <img src={item.image} className="h-full scale-90 transition-all active:scale-100  hover:scale-100 rounded aspect-square object-contain" />
                        <h1
                            style={{ color: item?.textColour }}
                            className="text-xl"
                        >
                            {item?.name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
