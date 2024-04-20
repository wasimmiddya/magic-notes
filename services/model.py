from langchain_community.llms import ollama
from langchain.prompts import PromptTemplate

def blogGenerator(blogTopic, blogStyle, words): 
    
    llm = ollama.Ollama(model="gemma:2b")
    
    print(words)
    
    blog_template = PromptTemplate.from_template(
        """
            Assume, that you are a professional blog writer.
            Now, write a blog on {blogTopic} for {blogStyle} within {words} words
        """
    )
    
    prompt = blog_template.format(blogTopic=blogTopic, blogStyle=blogStyle, words=words)
    
    response = llm.invoke(prompt)
    
    return response
    


def adGenerator(topic, adStyle, words, info=None):
    llm = ollama.Ollama(model="gemma:2b")
    
    additional_info = ""
    
    if(info != None):
        additional_info = f"""
        Here are some additional informations about this advertisement ::
        {info}
        """
    
    ad_template = PromptTemplate.from_template(
        """
            You are a content writer and have well expertise in writing advertisement.
            Write an advertisement on {topic} for {adStyle} within {words} words.
            {additional_info}
        """
    )
    
    prompt = ad_template.format(
        topic=topic, 
        adStyle=adStyle, 
        words=words, 
        additional_info=additional_info
    )
    
    response = llm.invoke(prompt)
    
    return response


