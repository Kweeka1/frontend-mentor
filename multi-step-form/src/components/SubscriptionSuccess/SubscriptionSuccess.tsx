const SubscriptionSuccess = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="mb-3">
        <img src="/images/icon-thank-you.svg" alt="success" />
      </div>
      <div className="text-center w-[90%]">
        <h2 className="py-4 text-3xl font-ubuntu-bd text-slate-700 tracking-wide">Thank you!</h2>
        <p className="text-gray-400 text-[15px]">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  )
}

export default SubscriptionSuccess;