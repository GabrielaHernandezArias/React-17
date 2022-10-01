// 1. react: functional component
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&         // expression + && returns expression if TRUE. returns FALSE if FALSE
                                            // so if there are messages (true), unreadMessages.length will be returned
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}     // closing Mailbox function

const messages = ['React', 'Re: React', 'Re:Re: React'];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Mailbox unreadMessages={messages} />);   
