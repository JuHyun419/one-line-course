@import "../../common/ColorScheme";

.comment--new-comment {
  display: flex;
  flex-direction: row;

  border: 1px solid var(--color-border-default);
  background-color: rgba(155, 155, 155, 0.05);

  position: relative;

  padding: 5px;
  margin-bottom: 3%;

  & &-col1 {
    // width: auto;

    display: flex;
    flex-direction: column;

    border-right: 1px dashed #000;

    padding: 5px;
  }

  & &-col2 {
    width: 100%;

    display: flex;
    flex-direction: row;

    border-left: none;

    position: relative;

    padding: 10px;

    .btn {
      position: absolute;
      left: 87%;
      top: 60%;
    }
  }
}
