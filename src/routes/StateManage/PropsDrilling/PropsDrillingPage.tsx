export const PropsDrillingPage = () => {
    return (
        <div>
            <section>
                <h1>Props Drilling в React: проблема и способы решения</h1>

                <p>
                    В React props drilling — это ситуация, когда данные или
                    handlers приходится передавать через несколько уровней
                    компонентов, даже если промежуточные компоненты их не
                    используют.
                </p>

                <div className="bg-gray-100 rounded-xl p-4 mt-4 font-mono text-sm whitespace-pre">
                    {`App
 └── Layout
      └── Sidebar
           └── UserMenu
                └── LogoutButton`}
                </div>

                <p>
                    Если <code>onLogout</code> нужен только{' '}
                    <code>LogoutButton</code>, но передаётся через все
                    компоненты — это props drilling.
                </p>
            </section>

            <section>
                <h2>На что влияет props drilling</h2>

                <div>
                    <div>
                        <h3>1. Усложняет код</h3>

                        <p>
                            Компоненты начинают получать props, которые им не
                            нужны.
                        </p>
                    </div>

                    <div>
                        <h3>2. Повышает связность</h3>

                        <p>
                            Промежуточные компоненты становятся зависимыми от
                            чужой логики.
                        </p>
                    </div>

                    <div>
                        <h3>3. Усложняет поддержку</h3>

                        <p className="leading-8">
                            При изменении структуры приложения приходится
                            переписывать цепочки props.
                        </p>
                    </div>

                    <div>
                        <h3>4. Плохо масштабируется</h3>

                        <p>
                            В больших приложениях количество “технических props”
                            начинает быстро расти.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Способы решения</h2>

                <div>
                    <div>
                        <h3>1. Composition через children</h3>

                        <p>Самый простой и “react-way” подход.</p>

                        <p>
                            Идея — не прокидывать данные через всё дерево, а
                            передавать готовый UI через <code>children</code>.
                        </p>

                        <div className="bg-gray-100 rounded-xl p-4 overflow-x-auto">
                            <pre className="text-sm">
                                {`function App() {
  return (
    <Layout>
      <UserMenu />
    </Layout>
  );
}`}
                            </pre>
                        </div>

                        <div className="mt-4">
                            <p className="font-medium">Когда использовать:</p>

                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>небольшое приложение</li>
                                <li>локальный state</li>
                                <li>не очень глубокое дерево компонентов</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-medium mb-3">
                            2. Context API
                        </h3>

                        <p className="leading-8 mb-4">
                            Context API позволяет получать данные напрямую из
                            любого компонента без передачи props через всё
                            дерево.
                        </p>

                        <div className="bg-gray-100 rounded-xl p-4 overflow-x-auto">
                            <pre className="text-sm">
                                {`const AuthContext = createContext();

function App() {
  return (
    <AuthContext.Provider value={auth}>
      <Layout />
    </AuthContext.Provider>
  );
}`}
                            </pre>
                        </div>

                        <div className="mt-4">
                            <p className="font-medium">Когда использовать:</p>

                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>shared state</li>
                                <li>редкие обновления state</li>
                                <li>маленькие и средние приложения</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-medium mb-3">
                            3. Redux Toolkit
                        </h3>

                        <p className="leading-8 mb-4">
                            Redux Toolkit — полноценный state manager для
                            больших приложений.
                        </p>

                        <p>
                            Компоненты получают только нужную часть state через
                            selectors.
                        </p>

                        <div>
                            <pre>
                                {`const user = useSelector(
  state => state.auth.user
);`}
                            </pre>
                        </div>

                        <div>
                            <p>Когда использовать:</p>

                            <ul>
                                <li>большое приложение</li>
                                <li>сложный state</li>
                                <li>много shared data</li>
                                <li>частые обновления state</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Заключение</h2>

                <div>
                    <div>
                        <span>Children / Composition:</span> подходит для
                        небольших приложений и локального state.
                    </div>

                    <div>
                        <span>Context API:</span> хороший выбор для shared state
                        с редкими обновлениями.
                    </div>

                    <div>
                        <span>Redux Toolkit:</span> подходит для больших
                        приложений со сложной архитектурой и большим количеством
                        shared state.
                    </div>
                </div>

                <div>
                    {`Чем больше приложение и сложнее state —
тем менее удобным становится Context API
и тем полезнее Redux.`}
                </div>
            </section>
        </div>
    )
}
