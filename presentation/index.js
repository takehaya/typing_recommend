// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";



// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
          コラ〜〜！!Pythonを書いたら
          お型付けしなさい〜〜！🐈
          </Heading>
          
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            セキュリティキャンプ 2018 
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
           @takemioIO:takeru hayasaka
          </Text>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">目的</Heading>
          <Heading size={2} textColor="secondary">Python(と動的型付け言語)に型をつけてモダンなプログラミングをしてもらう良さを知ってもらう</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Image height="600" width="600" src="https://i.imgur.com/bYUbrWA.jpg?size=" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>TakeruHayasaka</Heading>
          <Heading size={5} textColor="secondary" caps>twitter:@takemioIO</Heading>
          <List>
            <ListItem>最近のマイブームはなろう小説を読むことと積ん読を増やすこと</ListItem>
            <ListItem>プログラミング意味論とオーバーレイネットワークに興味があります</ListItem>
          </List>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>アジェンダ</Heading>
          <List>
            <ListItem>今，型をつける意味</ListItem>
            <ListItem>Pythonにおいてのお型付け</ListItem>
            <ListItem>動的型付けのお型付けの今</ListItem>
            <ListItem>まとめ</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Quote>今，型をつける意味</Quote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>注意事項</Heading>
          <List>
            <ListItem>ドキュメントとしての型アノテーション?</ListItem>
            <ListItem>コンパイラに効率よくランタイムを作らせる型?</ListItem>
            <ListItem>どちらかというと今回は前者です:-)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>昔の世界</Heading>
          <List>
            <ListItem>特にウェブとかはAll動的型付けと言った状態を保っていた世界</ListItem>
            <ListItem>外部IOに型をつけづらいのでこんなものはいらないと思っていた</ListItem>
            <ListItem>ビジネスロジック今ほどガチガチではなくてゆるい</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>今の世界</Heading>
          <List>
            <ListItem>肥大化するソースコード．動的検査の限界を迎えたWebプログラミングの世界</ListItem>
            <ListItem>分厚いビジネスロジック，そのせいで実質的に静的な振る舞いで内部は定義される</ListItem>
            <ListItem>ビジネスロジック今ほどガチガチではなくてゆるい</ListItem>
            <ListItem>IDEや型の支援なしに大きいコードを管理するのは限界</ListItem>
            <List>
              <ListItem>静的フィールドを持つORMの読み書き</ListItem>
              <ListItem>暗黙的にschema表現が決められるJSONなど</ListItem>
            </List>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>今お型付けしなくてどうしますか？</Heading>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary">
          <Quote>Pythonにおいての</Quote>
          <Quote>お型付け</Quote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>つけられる型</Heading>
          <List>
            <ListItem>Jeremy Siek(@jeremysiek)とWalid Tahaが開発した型システムで漸進的型付けという</ListItem>
            <ListItem>cf.PEP 483 -- The Theory of Type Hints</ListItem>
            <List>
              <ListItem><Link target= "_blank" href="https://www.python.org/dev/peps/pep-0483/" >
              https://www.python.org/dev/peps/pep-0483/
              </Link></ListItem>
            </List>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>what Gradual Type?</Heading>
          <List>
            <ListItem>動的型付の言語に後付で型宣言を追加するもの</ListItem>
            <ListItem>既存のものに無理矢理型を当てはめるという特性上、高度な型表現を備えている</ListItem>
            <List>
              <ListItem>Generics、Union Type, Subtypingなど</ListItem>
            </List>
            <ListItem>実行時にエラーを吐かないが静的な表現を受け取れるのでコンパイラを納得させる辛い時間が短くなるいいとこ取りを目指したものシステム</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Pythonの型の取り巻く環境</Heading>
          <List>
            <ListItem>pythonでは3.5系から入った</ListItem>
            <ListItem>チェッカーとしてのプロジェクト</ListItem>
            <List>
              <ListItem><Link target= "_blank" href="http://mypy-lang.org/" >
                mypy
              </Link></ListItem>
              <ListItem><Link target= "_blank" href="https://pyre-check.org/" >
                pyre-checker
              </Link></ListItem>
            </List>
            <ListItem>pyreはfacebook製でまだ0.0.10なのでバグがあるけど高速</ListItem>
            <ListItem>有名どころだけ挙げましたが挑戦しては死んでるプロジェクトがgithubに割とありますツライ・・・;-)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>1分でわかるお型付け例</Heading>
          <List>
            <ListItem>例:返すべき型が間違ってる場合</ListItem>
          </List>
          <Image src="https://i.imgur.com/nYupbAW.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>1分でわかるお型付け例</Heading>
          <List>
            <ListItem>例：引数が足りない場合</ListItem>
          </List>
          <Image src="https://i.imgur.com/P28Xqiv.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>1分でわかるお型付け例</Heading>
          <List>
            <ListItem>例: 変数宣言</ListItem>
          </List>
          <Image src="https://i.imgur.com/B5l3fiz.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>1分でわかるお型付け例</Heading>
          <List>
            <ListItem>例:JSONで受け取って処理するような関数に使う型表現方法</ListItem>
          </List>
          <Image src="https://i.imgur.com/gSRs7IE.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>🎉🎉🎉🎉</Heading>
          <Heading size={3} textColor="primary" caps>これでお型付けのやり方がわかりましたね！</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>pyreで始める型チェッカー</Heading>
          <List>
            <ListItem>`pip install pyre-check`</ListItem>
            <ListItem>対象のプロジェクトのカレントフォルダで`pyre init`</ListItem>
            <ListItem>これでpyreがチェック対象にするファイルカレントを設定した．（違う場合は.pyre_configurationを書き換える</ListItem>
            <ListItem>`pyre check`で実行</ListItem>
          </List>
          <Image src="https://i.imgur.com/xxM6dKZ.png"  />

        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>pyreで始める型チェッカー</Heading>
          <List>
            <ListItem>`.pyre_configuration`を書き換えるユースケース</ListItem>
            <List>
              <ListItem>例: venvを使ったとき</ListItem>
              <ListItem>$FILECURRENTは対象ファイルのカレントです</ListItem>
            </List>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>pyreで始める型チェッカー</Heading>
          <Image src="https://i.imgur.com/qBqntXw.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>pyreで始める型チェッカー</Heading>
          <List>
            <ListItem>チェックを厳しくしたい場合は厳しくしたいファイルの一番上に`# pyre-strict`を書く</ListItem>
            <ListItem>まだまだ0.0.10が最新というだけあり，実はいくつもバグがあって，それはgetenvの時などは誤ったエラーを吐くことがあるので`# pyre-ignore[6]`みたいなエラーを握りつぶして上げる必要がある</ListItem>
          </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>動的型付けのお型付けの今</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>他の言語の型チェックができるもの</Heading>
          <List>
            <ListItem>JavaScript: TypeScript, Flow(type)</ListItem>
            <ListItem>Python: mypy, pyre-checker</ListItem>
            <ListItem>PHP: hack, php-storm</ListItem>
            <ListItem>Ruby: Steep, RDL</ListItem>
            <ListItem>Ruby以外はfacebook製の型チェッカーが存在してる</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>JavaScript</Heading>
          <List>
            <ListItem>TypeScript, Flow(type)の２強 </ListItem>
            <List>
              <ListItem>TSは言語, Flowは型チェッカー</ListItem>
            </List>
            <ListItem>Flowの方が型推論が強く，初めから健全性を保ってる</ListItem>
            <ListItem>この一年前ぐらいから最近やっとバグが減ってきた感</ListItem>
            <ListItem>TSは一時期健全性を諦めてたがTS 2.4, 2.6で徐々に改善</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>PHP</Heading>
          <List>
            <ListItem>RFC:Typed Properties v2 [Under Discussion] </ListItem>
            <List>
              <ListItem>PHP 7.3 向けで RFC の出ていた型付プロパティについて PHP 7.4 をターゲットとするよう方針が決まる</ListItem>
              <ListItem>今年の7/23にどうするかコミュニティ内の投票が始まるはずだったが全くはじまらない（というか多分7.4がまだまだ先だから急いでないからなのでしょうね）</ListItem>
            </List>
            <ListItem><Link target= "_blank" href="https://externals.io/message/102333#102867" >
            https://externals.io/message/102333#102867
            </Link></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Ruby</Heading>
          <List>
            <ListItem>多分この世界があまり型システムに本気で関心持ってコミットしようとしてる人が少ないのでまだまだ蛹の中のようにドロドロと固まってない世界なのでワンチャンある世界</ListItem>
            <ListItem>しかしながら2018RubyKaigiでは遠藤さんの`Type Profiler: An analysis to guess type signatures`という発表など宗太郎さんの`Steep`の発表など型への言及が</ListItem>
            <ListItem>相変わらず型を書きたくないmatzさんはkeynoteでついに型について発言しててビックリ</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>まとめ</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>お気持ち</Heading>
          <List>
            <ListItem>個人的にはアレもコレもuntypedな世界もそれも一つの言語の在り方だなぁと思ってます</ListItem>
            <ListItem>しかしエンジニアとしてサスティナブルなソース管理をするならば型システムの表現を外す手はないのでは?</ListItem>
            <ListItem>型システムの理解すべき一つとして「共変性と反変性」について触れなかったがこれがすべてのエンジニアが理解してるかというとシンドイものがある．．．．</ListItem>

          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>お気持ち</Heading>
          <List>
            <ListItem>次に来るのは意味論なのでみんな意味論を勉強しよう</ListItem>
            <ListItem>誰が型をつけたいのか？それはあんなに言ったけど少しでも改善したい動機があるかだと思ってます</ListItem>
            <List>
              <ListItem>Guido 自身も PyCharm や Google でも似たようなスタブファイルを作っていたから標準化することに意義があるんだと言っていた</ListItem>
            </List>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>まとめ</Heading>
          <List>
            <ListItem>Python(とお型づけ可能な動的型付け言語)には型をつけて実行前にバグを倒そう</ListItem>
            <ListItem>時代が移りゆく動的型付け言語への型の必要性の理解を深めることで大きなものに太刀打ちする一つの手段を知ることができた．</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>🎉🎉🎉🎉</Heading>
          <Heading size={3} textColor="primary" caps>最高のお型付けライフを！</Heading>
        </Slide>
      </Deck>
    );
  }
}
