import { Container } from "@/ui/Container";
import { Header } from "@/ui/Header";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
    return <>
        <Header />
        <Container>
            <div className="place-self-center mr-auto lg:col-span-12">
                <p className="text-4xl text-white py-4">
                    プライバシーポリシー（個人情報保護方針）
                </p>
                <p className="text-md text-white">
                    KingBulk（以下、当アプリ）は、ユーザーの個人情報について以下の通りプライバシーポリシーを定めます。本プライバシーポリシーは、本アプリ運営者がどのような個人情報を取得し、
                    どのように利用、共有するか、ユーザーがどのようにご自身の個人情報を管理できるかを説明するものです。
                    <h2 className="mt-6 text-xl font-bold">1. 個人情報の取得方法</h2>
                    <p className="indent-2 py-2">
                        当アプリはユーザーが利用登録する際にメールアドレスなど個人を特定できうる情報を取得させていただくことがあります。<br />
                        また、お問合せフォームへの送信の際にもメールアドレスを取得させていただきます。
                    </p>
                    <h2 className="mt-6 text-xl font-bold">2. 個人情報の利用目的</h2>
                    <p className="indent-2 py-2">
                        取得した記録の情報を分析し、サービスの新機能やの検討に利用します。<br />
                        また、サポートの際にはお問い合わせ頂いたユーザーの情報を照応した上で返答する事があります。
                    </p>
                    <h2 className="mt-6 text-xl font-bold">3. 個人データの第三者提供</h2>
                    <p className="indent-2 py-2">
                        当アプリは法令及びガイドラインに別段の定めがある場合を除き、同意を得ないで第三者に個人情報を提供することは致しません。
                    </p>
                    <h2 className="mt-6 text-xl font-bold">4. 個人データの開示、訂正</h2>
                    <p className="indent-2 py-2">
                        当アプリは本人から個人情報の開示を求められたときには、遅滞なく本人に対しこれを開示します。<br />
                        個人情報の利用目的の通知や訂正、追加、削除、利用の停止、第三者への提供の停止を希望される方はお問合せフォームよりご連絡ください。
                    </p>
                    <h2 className="mt-6 text-xl font-bold">5. 個人情報取扱にかんする相談や苦情の連絡先</h2>
                    <p className="indent-2 py-2">
                        当アプリの個人情報の取り扱いに関するご質問やご不明点、苦情、その他のお問い合わせはお問い合わせフォームよりご連絡ください。
                    </p>
                    <h2 className="mt-6 text-xl font-bold">6. プライバシーポリシーの制定日及び改定日</h2>
                    <p className="indent-2 py-2">
                        制定：2023年1月24日
                    </p>
                    <h2 className="mt-6 text-xl font-bold">7. 免責事項</h2>
                    <p className="indent-2 py-2">
                        利用者が本アプリを利用することにより生じた損害、及び利用者が第三者に与えた損害に関して、開発元は一切の責任を負わないものとします。
                    </p>
                </p>
            </div>

        </Container>
    </>
}
export default PrivacyPolicy;