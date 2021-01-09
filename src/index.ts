import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon } from '@nodegui/nodegui';

const win = new QMainWindow();
win.setWindowTitle("PyroCDN Uploader");

const centralWidget = new QWidget();
centralWidget.setObjectName("mainWindow");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #mainWindow {
      background-color: #009688;
      width: 100vw;
      height: 100vh;
    }
  `
);
win.setMinimumSize(600, 550)
win.show();

(global as any).win = win;
