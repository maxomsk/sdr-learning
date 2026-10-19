// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">О книге</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fm_preface.html">Предисловие</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fm_installation.html">Установка</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fm_notation.html">Обозначения</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01_introduction.html">1. Введение</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02_preliminaries.html">2. Предварительные знания</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="02_01_ndarray.html">2.1 Манипулирование данными</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="02_02_pandas.html">2.2 Предобработка данных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="02_03_linear_algebra.html">2.3 Линейная алгебра</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="02_04_calculus.html">2.4 Математический анализ</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="02_05_autograd.html">2.5 Автоматическое дифференцирование</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="02_06_probability.html">2.6 Вероятность</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="02_07_lookup_api.html">2.7 Работа с документацией</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03_linear_networks.html">3. Линейные нейронные сети</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="03_01_linear_regression.html">3.1 Линейная регрессия</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="03_02_linear_regression_scratch.html">3.2 Линейная регрессия с нуля</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="03_03_linear_regression_concise.html">3.3 Линейная регрессия: краткая реализация</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="03_04_softmax_regression.html">3.4 Softmax-регрессия</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="03_05_image_classification_dataset.html">3.5 Набор данных для классификации изображений</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="03_06_softmax_regression_scratch.html">3.6 Softmax-регрессия с нуля</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="03_07_softmax_regression_concise.html">3.7 Softmax-регрессия: краткая реализация</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04_multilayer_perceptrons.html">4. Многослойные перцептроны</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_01_mlp.html">4.1 Многослойный перцептрон</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_02_mlp_scratch.html">4.2 Реализация многослойного перцептрона с нуля</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_03_mlp_concise.html">4.3 Краткая реализация многослойного перцептрона</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_04_underfit_overfit.html">4.4 Выбор модели, недообучение и переобучение</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_05_weight_decay.html">4.5 Затухание весов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_06_dropout.html">4.6 Исключение (dropout)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_07_backprop.html">4.7 Прямое распространение, обратное распространение и вычислительные графы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_08_numerical_stability_init.html">4.8 Численная устойчивость и инициализация модели</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_09_environment.html">4.9 Окружение и сдвиг распределения</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="04_10_kaggle_house_price.html">4.10 Практика: соревнование Kaggle по прогнозированию цен на жильё</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="05_deep_learning_computation.html">5. Вычисления глубокого обучения</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="05_01_model_construction.html">5.1 Слои и блоки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="05_02_parameters.html">5.2 Управление параметрами</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="05_03_deferred_init.html">5.3 Отложенная инициализация</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="05_04_custom_layer.html">5.4 Пользовательские слои</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="05_05_read_write.html">5.5 Чтение и запись файлов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="05_06_use_gpu.html">5.6 Графические процессоры (GPU)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06_convolutional_neural_networks.html">6. Свёрточные нейронные сети</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="06_01_why_conv.html">6.1 От полносвязных слоёв к свёрткам</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="06_02_conv_layer.html">6.2 Свёртки для изображений</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="06_03_padding_and_strides.html">6.3 Заполнение и шаг</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="06_04_channels.html">6.4 Многоканальные входы и выходы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="06_05_pooling.html">6.5 Слои пулинга</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="06_06_lenet.html">6.6 Свёрточные нейронные сети (LeNet)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="07_convolutional_modern.html">7. Современные свёрточные нейронные сети</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="07_01_alexnet.html">7.1 Глубокие свёрточные нейронные сети (AlexNet)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="07_02_vgg.html">7.2 Сети с использованием блоков (VGG)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="07_03_nin.html">7.3 Сеть в сети (NiN)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="07_04_googlenet.html">7.4 Сеть с параллельными конкатенациями (GoogLeNet)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="07_05_batch_norm.html">7.5 Пакетная нормализация</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="07_06_resnet.html">7.6 Остаточные сети (ResNet)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="07_07_densenet.html">7.7 Плотно связанные сети (DenseNet)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="08_recurrent_neural_networks.html">8. Рекуррентные нейронные сети</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="08_01_sequence.html">8.1 Модели последовательностей</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="08_02_text_preprocessing.html">8.2 Предобработка текста</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="08_03_language_models_and_dataset.html">8.3 Языковые модели и набор данных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="08_04_rnn.html">8.4 Рекуррентные нейронные сети</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="08_05_rnn_scratch.html">8.5 Реализация рекуррентной нейронной сети с нуля</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="08_06_rnn_concise.html">8.6 Краткая реализация рекуррентных нейронных сетей</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="08_07_bptt.html">8.7 Обратное распространение через время (BPTT)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="09_recurrent_modern.html">9. Современные рекуррентные нейронные сети</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_01_gru.html">9.1 Управляемый рекуррентный блок (GRU)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_02_lstm.html">9.2 Долгая краткосрочная память (LSTM)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_03_deep_rnn.html">9.3 Глубокие рекуррентные нейронные сети</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_04_bi_rnn.html">9.4 Двунаправленные рекуррентные нейронные сети</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_05_machine_translation_and_dataset.html">9.5 Машинный перевод и набор данных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_06_encoder_decoder.html">9.6 Архитектура «кодировщик — декодировщик»</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_07_seq2seq.html">9.7 Обучение «последовательность в последовательность» (seq2seq)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="09_08_beam_search.html">9.8 Лучевой поиск</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10_attention_mechanisms.html">10. Механизмы внимания</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10_01_attention_cues.html">10.1 Подсказки внимания</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10_02_nadaraya_waston.html">10.2 Агрегация внимания: ядерная регрессия Надарая — Ватсона</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10_03_attention_scoring_functions.html">10.3 Функции оценки внимания</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10_04_bahdanau_attention.html">10.4 Внимание Баданау</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10_05_multihead_attention.html">10.5 Многоголовое внимание</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10_06_self_attention_and_positional_encoding.html">10.6 Самовнимание и позиционное кодирование</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10_07_transformer.html">10.7 Transformer</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11_optimization.html">11. Алгоритмы оптимизации</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_01_optimization_intro.html">11.1 Оптимизация и глубокое обучение</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_02_convexity.html">11.2 Выпуклость</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_03_gd.html">11.3 Градиентный спуск</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_04_sgd.html">11.4 Стохастический градиентный спуск</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_05_minibatch_sgd.html">11.5 Минибатчевый стохастический градиентный спуск</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_06_momentum.html">11.6 Метод импульса</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_07_adagrad.html">11.7 Алгоритм AdaGrad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_08_rmsprop.html">11.8 Алгоритм RMSProp</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_09_adadelta.html">11.9 Adadelta</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_10_adam.html">11.10 Алгоритм Adam</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="11_11_lr_scheduler.html">11.11 Планировщики скорости обучения</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12_computational_performance.html">12. Вычислительная производительность</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="12_01_hybridize.html">12.1 Компиляторы и интерпретаторы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="12_02_async_computation.html">12.2 Асинхронные вычисления</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="12_03_auto_parallelism.html">12.3 Автоматическое распараллеливание</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="12_04_hardware.html">12.4 Аппаратное обеспечение</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="12_05_multiple_gpus.html">12.5 Обучение на нескольких GPU</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="12_06_multiple_gpus_concise.html">12.6 Краткая реализация обучения на нескольких GPU</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="12_07_parameterserver.html">12.7 Сервер параметров</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="13_computer_vision.html">13. Компьютерное зрение</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_01_image_augmentation.html">13.1 Аугментация изображений</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_02_fine_tuning.html">13.2 Дообучение</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_03_bounding_box.html">13.3 Обнаружение объектов и ограничивающие рамки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_04_anchor.html">13.4 Якорные рамки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_05_multiscale_object_detection.html">13.5 Обнаружение объектов в нескольких масштабах</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_06_object_detection_dataset.html">13.6 Набор данных для обнаружения объектов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_07_ssd.html">13.7 Одноступенчатое обнаружение с несколькими окнами (SSD)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_08_rcnn.html">13.8 Семейство R-CNN</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_09_semantic_segmentation_and_dataset.html">13.9 Семантическая сегментация и набор данных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_10_transposed_conv.html">13.10 Транспонированная свёртка</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_11_fcn.html">13.11 Полносвёрточные сети</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_12_neural_style.html">13.12 Перенос стиля</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_13_kaggle_cifar10.html">13.13 Практика: соревнование Kaggle по классификации изображений (CIFAR-10)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="13_14_kaggle_dog.html">13.14 Практика: соревнование Kaggle по распознаванию пород собак (ImageNet Dogs)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="14_natural_language_processing_pretraining.html">14. Обработка естественного языка: предобучение</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_01_word2vec.html">14.1 Вложения слов (word2vec)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_02_approx_training.html">14.2 Приближённое обучение</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_03_word_embedding_dataset.html">14.3 Набор данных для предобучения вложений слов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_04_word2vec_pretraining.html">14.4 Предобучение word2vec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_05_glove.html">14.5 Вложения слов на основе глобальных векторов (GloVe)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_06_subword_embedding.html">14.6 Вложения подслов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_07_similarity_analogy.html">14.7 Сходство слов и задачи на аналогии</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_08_bert.html">14.8 Двунаправленные представления кодировщика Transformer (BERT)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_09_bert_dataset.html">14.9 Набор данных для предобучения BERT</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="14_10_bert_pretraining.html">14.10 Предобучение BERT</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15_natural_language_processing_applications.html">15. Обработка естественного языка: приложения</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="15_01_sentiment_analysis_and_dataset.html">15.1 Анализ тональности и набор данных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="15_02_sentiment_analysis_rnn.html">15.2 Анализ тональности: рекуррентные нейронные сети</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="15_03_sentiment_analysis_cnn.html">15.3 Анализ тональности: свёрточные нейронные сети</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="15_04_natural_language_inference_and_dataset.html">15.4 Логический вывод на естественном языке и набор данных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="15_05_natural_language_inference_attention.html">15.5 Логический вывод на естественном языке: внимание</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="15_06_finetuning_bert.html">15.6 Дообучение BERT для приложений уровня последовательности и уровня токенов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="15_07_natural_language_inference_bert.html">15.7 Логический вывод на естественном языке: дообучение BERT</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="16_appendix_tools.html">16. Приложение: инструменты для глубокого обучения</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="16_01_jupyter.html">16.1 Использование Jupyter Notebook</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="16_02_sagemaker.html">16.2 Использование Amazon SageMaker</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="16_03_aws.html">16.3 Использование экземпляров Amazon EC2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="16_04_selecting_servers_gpus.html">16.4 Выбор серверов и GPU</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="16_05_contributing.html">16.5 Вклад в развитие книги</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="16_06_d2l.html">16.6 Документация по API пакета d2l</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="references.html">Литература</a></span></li><li class="chapter-item expanded "><li class="part-title">О переводе</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notice.html">Авторство и лицензия</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="provenance.html">Происхождение материалов</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

