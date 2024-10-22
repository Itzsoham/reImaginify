import Header from "@/components/shared/Header";
// import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  // const { userId } = auth();
  const transformation = transformationTypes[type];

  // if (!userId) redirect("/sign-in");

  // const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        {/* <TransformationForm
          userId={user._id} // Ensure user._id is a string
          type={transformation.type as TransformationTypeKey} // Ensure type is valid
          creditBalance={user.creditBalance} // Ensure creditBalance is a number
        /> */}
      </section>
    </>
  );
};

export default AddTransformationTypePage;
