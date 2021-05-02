.comment--new-comment {
  display: flex;
  flex-direction: row;

  border: 1px solid #000;
  background-color: rgba(155, 155, 155, 0.05);

  position: relative;

  padding: 5px;
  margin-bottom: 3%;
  box-sizing: border-box;

  & &-col1 {
    // width: auto;

    display: flex;
    flex-direction: column;

    border-right: 1px dashed #000;

    padding: 5px;
    box-sizing: border-box;
  }

  & &-col2 {
    width: 100%;

    display: flex;
    flex-direction: row;

    border-left: none;

    position: relative;

    padding: 10px;
    box-sizing: border-box;

    .btn {
      position: absolute;
      left: 87%;
      top: 60%;
    }
  }
}
